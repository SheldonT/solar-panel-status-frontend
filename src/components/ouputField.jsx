import { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import { SocketContext } from '../contexts/socketContext';

function OutputField({ title, event, serialCommand, hihi=30, hi=20, lo=10, lolo=0}) {

  const [value, setValue] = useState(0.0);
  const [color, setColor] = useState("black");

  const socket = useContext(SocketContext);

  useEffect(() => {

    const handler = (data) => {
      setValue(Number(data).toFixed(2));
    }

    socket.on(event, handler);

    const interval = setInterval(() => {
      socket.emit("send_command", serialCommand);
    }, 2000);

    return () => {
      socket.off(event, handler);
      clearInterval(interval);
    }
  }, [socket])

  useEffect(() => {
    if (value <= lolo) {
      setColor("red");
    } else if (value <= lo && value > lolo) {
      setColor("yellow");
    } else if (value >= hi && value < hihi) {
      setColor("yellow");
    } else if (value >= hihi) {
      setColor("red");
    }
    else {
      setColor("green")
    }
  }, [value])

  return (
    <>
    <TextField
      sx={
        {
          "& .MuiOutlinedInput-root fieldset": {
            borderColor: color,
            borderWidth: "5px",
          },
          
          "&":{
            width: "100px",
            margin: "10px"
          }
        }
      }
      label={title}
      value={value} />
    </>
  )
}

export default OutputField