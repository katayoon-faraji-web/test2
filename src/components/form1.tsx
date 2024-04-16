import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import usePostDataMutation from '../hooks/usePostDataMutation';


interface FilmOptionType {
  title: string;
  views: number;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', views: 1994 },
  { title: 'The Godfather', views: 1972 },
  { title: 'The Godfather: Part II', views: 1974 },
  { title: 'The Dark Knight', views: 2008 },
  { title: '12 Angry Men', views: 1957 },
  { title: "Schindler's List", views: 1993 },
  { title: 'Pulp Fiction', views: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    views: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', views: 1966 },
  { title: 'Fight Club', views: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    views: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    views: 1980,
  },
  { title: 'Forrest Gump', views: 1994 },
  { title: 'Inception', views: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    views: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", views: 1975 },
  { title: 'Goodfellas', views: 1990 },
  { title: 'The Matrix', views: 1999 },
  { title: 'Seven Samurai', views: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    views: 1977,
  },
  { title: 'City of God', views: 2002 },
  { title: 'Se7en', views: 1995 },
  { title: 'The Silence of the Lambs', views: 1991 },
  { title: "It's a Wonderful Life", views: 1946 },
  { title: 'Life Is Beautiful', views: 1997 },
  { title: 'The Usual Suspects', views: 1995 },
  { title: 'Léon: The Professional', views: 1994 },
  { title: 'Spirited Away', views: 2001 },
  { title: 'Saving Private Ryan', views: 1998 },
  { title: 'Once Upon a Time in the West', views: 1968 },
  { title: 'American History X', views: 1998 },
  { title: 'Interstellar', views: 2014 },
  { title: 'Casablanca', views: 1942 },
  { title: 'City Lights', views: 1931 },
  { title: 'Psycho', views: 1960 },
  { title: 'The Green Mile', views: 1999 },
  { title: 'The Intouchables', views: 2011 },
  { title: 'Modern Times', views: 1936 },
  { title: 'Raiders of the Lost Ark', views: 1981 },
  { title: 'Rear Window', views: 1954 },
  { title: 'The Pianist', views: 2002 },
  { title: 'The Departed', views: 2006 },
  { title: 'Terminator 2: Judgment Day', views: 1991 },
  { title: 'Back to the Future', views: 1985 },
  { title: 'Whiplash', views: 2014 },
  { title: 'Gladiator', views: 2000 },
  { title: 'Memento', views: 2000 },
  { title: 'The Prestige', views: 2006 },
  { title: 'The Lion King', views: 1994 },
  { title: 'Apocalypse Now', views: 1979 },
  { title: 'Alien', views: 1979 },
  { title: 'Sunset Boulevard', views: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    views: 1964,
  },
  { title: 'The Great Dictator', views: 1940 },
  { title: 'Cinema Paradiso', views: 1988 },
  { title: 'The Lives of Others', views: 2006 },
  { title: 'Grave of the Fireflies', views: 1988 },
  { title: 'Paths of Glory', views: 1957 },
  { title: 'Django Unchained', views: 2012 },
  { title: 'The Shining', views: 1980 },
  { title: 'WALL·E', views: 2008 },
  { title: 'American Beauty', views: 1999 },
  { title: 'The Dark Knight Rises', views: 2012 },
  { title: 'Princess Mononoke', views: 1997 },
  { title: 'Aliens', views: 1986 },
  { title: 'Oldboy', views: 2003 },
  { title: 'Once Upon a Time in America', views: 1984 },
  { title: 'Witness for the Prosecution', views: 1957 },
  { title: 'Das Boot', views: 1981 },
  { title: 'Citizen Kane', views: 1941 },
  { title: 'North by Northwest', views: 1959 },
  { title: 'Vertigo', views: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    views: 1983,
  },
  { title: 'Reservoir Dogs', views: 1992 },
  { title: 'Braveheart', views: 1995 },
  { title: 'M', views: 1931 },
  { title: 'Requiem for a Dream', views: 2000 },
  { title: 'Amélie', views: 2001 },
  { title: 'A Clockwork Orange', views: 1971 },
  { title: 'Like Stars on Earth', views: 2007 },
  { title: 'Taxi Driver', views: 1976 },
  { title: 'Lawrence of Arabia', views: 1962 },
  { title: 'Double Indemnity', views: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    views: 2004,
  },
  { title: 'Amadeus', views: 1984 },
  { title: 'To Kill a Mockingbird', views: 1962 },
  { title: 'Toy Story 3', views: 2010 },
  { title: 'Logan', views: 2017 },
  { title: 'Full Metal Jacket', views: 1987 },
  { title: 'Dangal', views: 2016 },
  { title: 'The Sting', views: 1973 },
  { title: '2001: A Space Odyssey', views: 1968 },
  { title: "Singin' in the Rain", views: 1952 },
  { title: 'Toy Story', views: 1995 },
  { title: 'Bicycle Thieves', views: 1948 },
  { title: 'The Kid', views: 1921 },
  { title: 'Inglourious Basterds', views: 2009 },
  { title: 'Snatch', views: 2000 },
  { title: '3 Idiots', views: 2009 },
  { title: 'Monty Python and the Holy Grail', views: 1975 },
];

 const Form1:React.FC = ():React.ReactNode =>{

    const options = top100Films.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
      });

    const defaultProps = {
      options: top100Films,
      getOptionLabel: (option: FilmOptionType) => option.title,
    };
    const flatProps = {
      options: top100Films.map((option) => option.title),
    };
    const [value, setValue] = React.useState<FilmOptionType | null>(null);
    const [inp1,setInp1] = React.useState<string|null>("")

    React.useEffect(()=>{
      console.log(value);
      console.log(inp1);
      
    },[value,inp1])
    const {mutate} = usePostDataMutation()
    const add =() =>{
      if(value && inp1){
        mutate({id:'10',title:inp1,views:(value.views).toString()})

      }

    }

    
    return(
        <Box component="form" sx={{display:'flex',width:'100%',height:'100px',background:'blue',justifyContent:'center',gap:"20px",padding:'20px'}}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(event:any)=>{setInp1(event.target.value)}} sx={{background:'white',color:'blue',borderRadius:'10px'}} />
            <Autocomplete
            {...defaultProps}
            id="controlled-demo"
            value={value}
            onChange={(event: any, newValue: FilmOptionType | null) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="controlled" variant="standard" />
            )}
          />
       
        

          
            <Button variant="contained" color="success" onClick={add}>
                add
            </Button>
      
        </Box>
        
        
    )

}
export default Form1;









