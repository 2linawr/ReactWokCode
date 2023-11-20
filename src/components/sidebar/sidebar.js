import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import {useState,useEffect} from 'react';
import { actionRequestData, actionRequestClear,actionRequestDataProfile } from '../../store/actions';
import { useDebounce } from "@uidotdev/usehooks";

function SideBar() {

  const [message, setMessage] = useState([]);
  const [textinput, setInput] = useState('');
  let hrefdataid = 'https://jsonplaceholder.typicode.com/users?id=""';
  let hrefdataname = 'https://jsonplaceholder.typicode.com/users?username=""';
  const users = useSelector((state) => state.reducer.users);
  const loadata =  useSelector((state) => state.reducer.loadata);
  const error =  useSelector((state) => state.reducer.error);
  const dispatch = useDispatch();
  const debouncedSearchTerm = useDebounce(textinput, 500);

  useEffect(() => {

      var i;
      var event_2 = new Event('change');
      var elem = document.getElementById('searchinput');
      elem.dispatchEvent(event_2);  

var str_array = textinput.split(',');

for(var i = 0; i < textinput.length; i++) {
   // Trim the excess whitespace.
   if(str_array[i]!=undefined){

    str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
    // Add additional code here, such as:
    setMessage(str_array[i]);
   }
}
setMessage(str_array);

      if(message.length!=0 && textinput!=""){
          for(i=0;i<=message.length+1;i++){
        if(message[i]!=undefined && message[i]!=""){
    
            if(!isNaN(parseInt(message[i]))){
          
              hrefdataid+="&id="+String(message[i]);
              
            }
            if(isNaN(parseInt(message[i]))){
              hrefdataname+="&username="+String(message[i]);
            }
          }
        }
  
  dispatch(actionRequestData(hrefdataid,hrefdataname));   

}
  else if(textinput==""){
        dispatch(actionRequestClear());
  }
  },[debouncedSearchTerm]);

const handleChange = (event) => {
  event.preventDefault();   
    if(event.target.value==""){
      setInput("");
      dispatch(actionRequestClear());
    }else{
      setInput(event.target.value);
      
var str_array = textinput.split(',');

for(var i = 0; i < textinput.length; i++) {
   // Trim the excess whitespace.
   if(str_array[i]!=undefined){

    str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
    // Add additional code here, such as:
    setMessage(str_array[i]);
   }
}
setMessage(str_array);
    }
    
}
  
const handleClick = e => {
  var foo = document.querySelectorAll(".infomation");

  for (var i = 0; i < foo.length; i++) {
    foo[i].classList.remove("active");
  }

  e.currentTarget.classList.add("active");
};
  return (
    <div className="MainblockSideBar">
        <span className="text_1blockside">Поиск сотрудников</span>
        <input id="searchinput" className="searchinput" onChange={handleChange}
        value={textinput} type="text"placeholder="Введите id или имя"/>
        <span className="text_2blockside">Результаты</span>
        <div className="blocksearchfinded">
        {loadata == true &&  
        <div className="col-sm-2 col-xs-4 text-center">
    <div className="spinner-loader"> </div>
  </div>}
        {users.length==0 && loadata==false && message=='' &&
        <span className="text_3blockside">начните поиск</span>
        }
        {users.length==0 && loadata==false && message!='' &&
  <span className="text_3blockside">ничего не найдено</span>
      }
        {
          users.map(userinfo => {
            return(
              <div className="blockprofile" onClick={(event)=>{
             const user = {
                id:userinfo.id,
                username:userinfo.username,
                email:userinfo.email,
                phone:userinfo.phone
              }  
              dispatch(actionRequestDataProfile(user));
              
            }
              } >
        <div className="logoProfile"></div>
        <div className="infomation" onClick={handleClick}>
          <span className='textinfomation_1'>{userinfo.username}</span>
          <span className='textinfomation_2'>{userinfo.email}</span>
        </div>
        </div>
            );
          })

                  }
        </div>
</div>
  );
}



export default SideBar;