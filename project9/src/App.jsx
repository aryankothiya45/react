import { useState } from 'react'
import './App.css'

function App() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <p>That's correct!</p>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try{
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h1>About Me!!!</h1>
      <p>what is my name??</p>

      <form onSubmit={handleSubmit}>
        <textarea 
          value={answer} 
          onChange={handleTextChange}
          disabled={status === 'submitting'}
        />  

        <br />
        <button disabled={
          answer.length === 0 || status === 'submitting'
        }>Submit</button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  );
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'aryan'
      if (shouldError) {
        reject(new Error('That is not correct!'));
      }
      else {
        resolve();
      }
    }, 0);   
  });
} 

export default App
