import { Stack } from '@mui/material';
import React, {useState} from 'react';


interface Prop {
    listOfNumber: number[];
    // itemNumber:number;
    start: number;
    handleClickNext: (name:string) => ()=> void;
}

const NextPage:React.FC<Prop>= ({listOfNumber, start, handleClickNext}) => {

    const [state, setState] = useState({next: true, previous: false});


    // eslint-disable-next-line jsx-a11y/aria-role
    return <Stack role='numbering' 
                direction='row' 
                spacing={1} 
                alignItems='center' 
                justifyContent='left'>
        <div 
            className={state.previous?'previous':'previous next_opacity'} 
            onClick={handleClickNext('previous')}>

            <div className='less_than'></div>
        </div>

        {listOfNumber.map((item)=> 
            (item>=start && item<=start+3) &&
                <span className={start===item?'numbering_focus':'numbering'}>{item}</span>)}
        <span className='numbering_focus'>...</span>
        {listOfNumber.map((item)=> 
            (item >= start + 15 && item <= start + 16) && 
                <span className='numbering'>{item}</span>)}

        <div 
            className={state.next?'next':'next next_opacity'}
            onClick={handleClickNext('next')}>
            <div className='greater_than'></div>
        </div>
    </Stack>
}

export default NextPage;