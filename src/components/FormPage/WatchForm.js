import styled from 'styled-components';
import HeaderForm from './HeaderForm';
import FormStyle, { FormInputs, Divider } from './FormStyle';
import { useContext, useState } from 'react';
import BottomForm from './BottomForm';
import {FormPageStyle} from './FormStudent';
import DataContext from '../contexts/DataContext';
import ListSkills from '../utils/Skill';
import { useHistory } from 'react-router';
import ClassContext from '../contexts/ClassContext';

export default function FormClass(){
    const history = useHistory();
    const [vLink, setVLink] = useState("");
    const [title, setTitle] = useState("");
    const [skills, setSkills] = useState([]);
    const [subject, setSubject] = useState("");
    const [skillInput, setSkillInput] = useState("");
    const [send, setSend] = useState(false);
    
    const datashow = ["Ciência de dados", "Dados", "Data Science"]

    const {setClassPage } = useContext(ClassContext);

    const { classPage } = useContext(ClassContext);
    
    function addSkills(){
        if(skillInput === ""){
            return;
        }
        const newSkills = [...skills, skillInput];
        setSkills(newSkills);
        setSkillInput("");
    }
    return(
        <FormPageStyle>
            <HeaderForm/>
            <FormStyle>
                <FormInputs>
                    <h3>O que é Ciência de Dados?</h3>
                    <Divider/>
                    <br/>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/c6fdZmTwhWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br/>
                    <br/>
                    <br></br>
                    <br></br>
                    <p>Competências neste vídeo</p>
                    <br></br>
                    <ListSkills skills={datashow}/>
                </FormInputs>
                <BottomForm setSend={setSend} click={'/'} message={'Concluir'}/>
            </FormStyle>
        </FormPageStyle>
    );
}

function SelectSubject(props){
    const { subjects } = useContext(DataContext);
    return(
        <SelectStyle id="subjects" name="subjects" onChange={e => props.setSubject(e.target.value)}>
            {subjects.map((subject, idx)=>{
                return(
                    <option key={idx} value={subject}>{subject}</option>
                );
            })}
        </SelectStyle>
    );
}
const SelectStyle = styled.select`
    border: none;
    background: #FFFFFF;
    border-radius: 8px;
    height: 40px;
    width: 50%;
    border: 1px solid #E6E6F0;
    margin-top: 10px;
    margin-bottom: 15px;
`;

export const SmallInput = styled.input`
    width: 70% !important;
    margin-right: 30px;
`;

export const AddSkill = styled.button`
    color: #FFFFFF;
    background: rgba(7, 162, 135, 0.5);
    height: 45px;
    width: 45px;
    font-weight: bolder;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    display: inline;
    border-radius: 45px;
`;

