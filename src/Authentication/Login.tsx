import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.css";

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const saveToken = async (key: string, token: string) => {
    try {
      document.cookie = `${key}=${token}; path=/; secure; samesite=strict`;
    } catch (error) {
      console.error('Fout bij het opslaan van token:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); 
    try {
      const response = await fetch('https://storingspunt-d02668d953a7.herokuapp.com/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          setError('401: Ongeldige inloggegevens');
        } else if (response.status === 500) {
          setError('500: Serverfout. Probeer later opnieuw.');
        } else {
          setError(`${response.status}: ${response.statusText}`);
        }
        return;
      }

      const data = await response.json();
      if (data.token) {
        await saveToken('authToken', data.token);
        if (document.cookie.includes('authToken')) {
          navigate('/dashboard');
        } else {
          console.error('Failed to set authToken cookie, Please try again later.');
          setError('Failed to set authToken cookie, Please contact our support team.');
        }
      } else {
        console.warn('Login failed', 'Please check your email and password');
        setError('No authentication token found. Please try again later or contact our support team if the issue persists.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      if (error instanceof Error && error.message.includes('Network request failed')) {
        console.error('Error', 'Network error. Please try again later.');
      } else if (error instanceof Error) {
        console.error('Error', error.message);
      }
    }
    };

  return (
    <div className={styles.login_background}>
      <div className={styles.container}>
        <div className={styles.login_box}>
          <div className={styles.header}>
            <h2>Sign in</h2>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
            <div className={styles.slider_container}>
              <label className={styles.slider_label}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className={styles.hidden_checkbox}
                />
                <span className={styles.slider}></span>
                Remember me
              </label>
            </div>
            {error && (
              <p className={styles.error_message}>{error}</p> 
            )}
            <button type="submit" className={styles.button}>
              Sign in
            </button>
          </form>
          <p className={styles.register_text}>
            Don’t have an account? <a href="/register" className={styles.link}> Sign up</a>
          </p>
        </div>
        <div className={styles.footer}>
          <p>© 2024, made with care by SMJKKL for a better BPV experience.</p>
        </div>
      </div>
    </div>
  );
};