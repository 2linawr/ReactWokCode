import './style.scss';
import { useDispatch, useSelector } from 'react-redux';

function TwoPages() {
  const users = useSelector((state) => state.reducer.user);
  const loadata = useSelector((state) => state.reducer.loadataprofile);
 /*Object.entries(users).length !== 0 && loadata ==false &&
       */

  //      <span className="textTwoPages">Выберите сотрудника, чтобы посмотреть его профиль</span>
  const dispatch = useDispatch();
  return (
    <div className="MainTwoPages">
    
       {loadata==true &&
       <div className="MainSpinner">
        <div className="col-sm-2 col-xs-4 text-center">
        <div className="spinner-loader_2"> </div>
      </div>
      </div>
       }

   {Object.entries(users).length !== 0 && loadata ==false &&
        <div className="blockprofile_2">
   
        <div className="logoProfile_2"></div>
        <div className="infomation_2">
          <span className='textinfomation_1_2'>{users.username}</span>
          <span className='textinfomation_2_2'><span className="email">email:</span> {users.email}</span>
          <span className='textinfomation_2_2'><span className="email">phone:</span> {users.phone}</span>
          <span className='textinfomation_3_2'>О себе:</span>
          <span className='textinfomation_4_2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </div>

         
        </div>
}

{
Object.entries(users).length === 0 && loadata ==false &&
<span className="textTwoPages">Выберите сотрудника, чтобы посмотреть его профиль</span>
}
        </div>

  );
}



export default TwoPages;