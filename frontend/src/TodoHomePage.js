import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Checkbox, Stack,Separator, IconButton } from '@fluentui/react';
import { DeleteIcon } from '@fluentui/react-icons';
// import { Separator } from '@fluentui/react/lib/Separator';

const horizontalGapStackTokens = {
    childrenGap: 10,
    padding: 10,
  };


const TodoHomePage = ()=> {

    const [todoData, setTodoData] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(()=> {

        const fetchData = async ()=> {
            try{

                const result = await axios.get('http://localhost:4000/');
                
                setTodoData(result.data);
            }catch(err) {
                console.log('Error while fetching: ', err);
            }
        };

        fetchData();

    },[]);
    
    const markAsDeleted = (id) => {
        setIsDeleted(!isDeleted);
        onDelete(id)
    }

    const onDelete = (itemId)=> {
        setTodoData(prevItem => prevItem.filter(item => item.id !== itemId))
    }

    const itemStyle = isDeleted ? { textDecoration: 'line-through'} : {}
    

    console.log(todoData)
    return (
        <Stack horizontalAlign="center">
            <h1> TODO LIST</h1>
            <Stack >
            {todoData.map((item)=> {
                return(
                    <>
                <Stack horizontal verticalAlign="center" tokens = {horizontalGapStackTokens}>
                    <Checkbox 
                    label = {item.name}
                    styles = {{
                        label:itemStyle,
                    }}
                    />
                    <IconButton 
                    iconProps={{ iconName: 'Delete'}}
                    onClick = {markAsDeleted}
                    disabled = {isDeleted}
                    styles= {{
                        icon: {color:'red'}
                    }}
                    />             
                </Stack>
                <Separator> </Separator>   
                    </>
                ) 

            })}
            </Stack>
        </Stack>
    )

}

export default TodoHomePage;