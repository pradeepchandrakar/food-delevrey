import {useState,useEffect} from 'react'

function useOnlineStatus() {

  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() =>{
    
    const online = window.addEventListener("online", () =>{
      setOnlineStatus(true);
   });
    const offline = window.addEventListener("offline" , ()=>{
   setOnlineStatus(false);
 });

   return() =>{
window.removeEventListener("online",online);
window.removeEventListener("offline",offline);
   }

  })

  window.addEventListener("online", () =>{
     setOnlineStatus(true);
  });
window.addEventListener("offline" , ()=>{
  setOnlineStatus(false);
});

return onlineStatus;
}

export default useOnlineStatus
