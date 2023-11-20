import SideBar from '../../components/sidebar/sidebar';
import TwoPages from '../../components/twopages/twopages';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';

function MainPages() {
    const counter = useSelector((state) => state.reducer);
    const dispatch = useDispatch();
 //       <button onClick={() => dispatch(actionRequestData())}>Нажми меня</button>

    return (
    <div className="Main">
      <div className="block_text">
      <span className="text_1">Жилфонд</span>
      <span className="text_2">Пользователь</span>
      </div>
      <div className="block_components">
        <SideBar/>
        <TwoPages/>
        </div>
    </div>
  );
}



export default MainPages;