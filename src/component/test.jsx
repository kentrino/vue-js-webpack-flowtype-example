import style from './Test.css';

const test = {
  render (h) {
    return <div><h1 class={style.red}>Yeah!! This is test.</h1></div>
  },
  name: 'Test'
}

export default test;
