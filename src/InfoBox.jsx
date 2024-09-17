import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import './InfoBox.css'

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
   
    const cold_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREPO-0xuQwxxxbyKhTDkFVhqWzTjcLCA69ag&s"
    const hot_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMHFERmBsiMPilr7L5pnPLUuSbv-uhnWtXw&usqp=CAU";
    const rain_url="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs="
    
    if(info.city==undefined){
        return (
            <div id="defaultImage">
                <img src="https://assets.thehansindia.com/h-upload/2022/08/04/1306284-weather-update.webp" alt="image not loaded" style={{maxWidth: "500px"}} />
            </div>
        )
    }
    else{
        
    return(
        

       
          <div className="InfoBox">
           
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80?rain_url:info.temp>15?hot_url:cold_url}
                    title="green iguana"
                />
             <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {info.city }&nbsp;
                 {info.humidity>80?<ThunderstormIcon></ThunderstormIcon>:info.temp>15?<WbSunnyIcon></WbSunnyIcon>:<AcUnitIcon></AcUnitIcon>}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                 <p>Temperature={info.temp}&deg;C</p>
                 <p>Humidity={info.humidity}</p>
                 <p>Min temp {info.tempMin}&deg;C</p>
                 <p>Max temp {info.tempMax}&deg;C</p>
                 <p>The weather can be describe as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                </Typography>
            </CardContent>
        
            </Card>
            
        </div>
          </div>
        
       )
    }
    
}