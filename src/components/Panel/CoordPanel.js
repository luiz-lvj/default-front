import styled from 'styled-components';
import ContentPage from '../utils/ContentPage';
import { HeaderStyle, PageStyle } from '../utils/Header';
import { IoArrowDownOutline, IoTrashOutline } from 'react-icons/io5';
import { MdModeEdit } from 'react-icons/md'
import ButtonStyle from './ButtonStyle';
import { useHistory } from 'react-router';
import { useContext } from 'react';
import DataContext from '../contexts/DataContext';

export default function CoordPanel(){
    const history = useHistory();
    const {students} = useContext(DataContext);
    return(
        <PageStyle>
            <HeaderCoord>
                <h2>Painel Alunos</h2>
                <div>
                    <ButtonStyle onClick={() => history.push("/novoestudante")}>Adicionar alunos</ButtonStyle>
                </div>
            </HeaderCoord>
            <ContentPage>
                <h2>Alunos</h2>
                <p>{students.length} alunos cadastrados</p>
                <TableStudents>
                    <tr>
                        <th>Nome <IoArrowDownOutline size={'20px'}/></th>
                        <th>Escola <IoArrowDownOutline size={'20px'}/></th>
                        <th>Série <IoArrowDownOutline size={'20px'}/></th>
                        <th>Matéria <IoArrowDownOutline size={'20px'}/></th>
                        <th></th>
                    </tr>
                    {students.map((student)=>{
                        return(
                            <StudentLine
                            img={student.img}
                            name={student.name}
                            school={student.school}
                            series={student.level}
                            subjects={student.subjects}
                            />
                        );
                    })}
                </TableStudents>
            </ContentPage>
        </PageStyle>
    );
}

function StudentLine(props){
    return(
        <tr>
            <td> <img alt="" src={props.img}/> <p>{props.name}</p></td>
            <td>{props.school}</td>
            <td>{props.series}</td>
            <td>
                {Object.keys(props.subjects).map((subject)=>{
                    return subject + ', ';
                })}
            </td>
            <td>
                <div>
                    <MdModeEdit size={'23px'}/> <IoTrashOutline size={'23px'}/>
                </div>
            </td>
        </tr>
    );
}

const TableStudents = styled.table`
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #757D8A;
    tr th, td{
        text-align: right;
    }
    tr {
        height: 66px;
        padding: 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        &:nth-child(2n){
                background: #F8F8F8;
        }
        th, td{
            display: flex;
            align-items: center;
            width: 23%;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 5px;
            &:last-child{
                width: 8%;
            }
        }
        
    }
    tr td img{
        height: 48px;
        width: 48px;
        border-radius: 48px;
        margin-right: 15px;
    }
    tr td div{
        width: 100%;
        display: flex;
        align-items: right;
        justify-content: space-between;
    }
`;

const HeaderCoord = styled(HeaderStyle)`
    display: flex;
    justify-content: space-between;
`;
