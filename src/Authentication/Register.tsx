import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://storingspunt-d02668d953a7.herokuapp.com/api/users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      if (data) {
        console.warn('Success', 'Registration successful! Redirecting...');
        navigate('/login');
      } else {
          console.warn('Error', 'An error occurred during registration');}
  } catch (error) {
      console.error(error);
      console.warn('Error', 'An error occurred during registration');
  }
};

return (
  <div className={styles.register_background}>
      <div className={styles.container}>
        <div className={styles.login_box}>
          <div className={styles.header}>
            <h2>Register</h2>
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
            <button type="submit" className={styles.button}>
              Register
            </button>
          </form>
          <p className={styles.register_text}>
            Already have an account? <a href="/login" className={styles.link}> Sign in</a>
          </p>
        </div>
        <div className={styles.footer}>
          <p>© 2024, made with care by SMJKKL for a better BPV experience.</p>
        </div>
      </div>
    </div>
  );
};