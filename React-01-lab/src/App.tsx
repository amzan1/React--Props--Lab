import './App.css'
import Programers from './component/Programers'
import Companies from './component/Companies'

function App() {
  return (
    <>
    <div className='porgramer'>
      <Programers name='ahmad' plangoeg='c,c+' exyears={2} cambany='stc'></Programers>
      <hr></hr>
      <Programers name='amal' plangoeg='java' exyears={1} cambany='stc'></Programers>
      <hr></hr>
      <Programers name='hind' plangoeg='c#,java' exyears={3} cambany='stc'></Programers>
      </div>
      <Companies name='stc' numOfemploe={1200} year={20} servic='test' pric={2000}/>
    </>
  )
}

export default App
