import React, { useEffect, useState } from "react"
import nutricionistaStyle from '../../Nutricionistas/Nutricionistas.module.css'
import DropdownUf from "../../../Components/DropdownUf/DropdownUf"
import Header from "../../../Components/Header/Header"
import searchIcon from '../../../Assets/search.png'
import Footer from '../../../Components/Footer/Footer'
import Card from "../../../Components/Card/Card"
import arquivo from "../../Nutricionistas/exemplo"
import imagem from '../../../Assets/user-icon.png'
import { Pagination } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"

function Adm(){
  const [selectedUF, setSelectedUF] = useState('');
  const navigate = useNavigate();

  const nutricionistasData = arquivo;

  const [currentPage, setCurrentPage] = useState(1);
  const elementsPerPage = 5;
  const [filteredNutricionistas, setFilteredNutricionistas] = useState([])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    filterNutricionistas()
  }, [selectedUF, currentPage])
  

  function filterNutricionistas() {
    let filtered = selectedUF ? nutricionistasData.filter((nutricionista) => nutricionista.uf === selectedUF)
      : nutricionistasData

    const indexOfFirst = (currentPage - 1) * elementsPerPage;
    const indexOfLast = indexOfFirst + elementsPerPage;
    const visibleFilteredItems = filtered.slice(indexOfFirst, indexOfLast);
    

    setFilteredNutricionistas(filtered);
    console.log(filtered)
  }


  function renderNotFilteredItems(){
    const indexOfFirst =(currentPage - 1) * elementsPerPage
    const indexOfLast = indexOfFirst + elementsPerPage
    const visibleItems = nutricionistasData.slice(indexOfFirst, indexOfLast)

    const roleAdm = visibleItems.filter((nutricionista) => nutricionista.role === 'Adm')

    return roleAdm.map((nutricionista) => {

      return(
        <Card
          key={nutricionista.id}
          id={nutricionista.id}
          nome={nutricionista.nome}
          clinica={nutricionista.clinica}
          especialidades={nutricionista.especialidadesNutricao.join(', ')}
          cidade={nutricionista.cidade}
          uf={nutricionista.uf}
          localizacao={nutricionista.localizacao}
          imagemPerfil={imagem}//mudar depois
          handleClick={() => btnClick(nutricionista.id, nutricionista.nome)}
        />)

    });

  }

  const pageItems = [];
  const totalPages = Math.ceil(filteredNutricionistas.length / elementsPerPage);

  for (let page = 1; page <= totalPages; page++) {
    pageItems.push(
      <Pagination.Item className={nutricionistaStyle.paginationItem}
        style={{
        backgroundColor: page === currentPage ? '#6828ED' : 'white',
      }}
        key={page}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  function handleUfChange(uf){
    setSelectedUF(uf);
    setCurrentPage(1)
  };

  function renderFiltered(){
    return filteredNutricionistas.map((nutricionista) => {
      return(
      <Card
        key={nutricionista.id}
        id={nutricionista.id}
        nome={nutricionista.nome}
        clinica={nutricionista.clinica}
        especialidades={nutricionista.especialidadesNutricao.join(", ")}
        cidade={nutricionista.cidade}
        uf={nutricionista.uf}
        localizacao={nutricionista.localizacao}
        imagemPerfil={imagem} //mudar depois
        handleClick={() => btnClick(nutricionista.id, nutricionista.nome)}
      />)
    })
  }

  function btnClick(id, nome){
    navigate(`/chat/${nome}`, {replace: true, state: {id: id, nome: nome}})
  }

  return (
    
    <div>
      <Header/>
      <div class={nutricionistaStyle.content}>

        <h1 class={nutricionistaStyle.mainTitle}>
          {nutricionistasData[0].nome} Você tem uma Nova Mensagem
          
        </h1>
          

        <div class={nutricionistaStyle.lista}>
          {
            selectedUF == '' ? 
            renderNotFilteredItems()
            :
            renderFiltered()
          }
        </div>

      </div>
      
      

    <Footer/>
    </div>

  )
}

export default Adm;