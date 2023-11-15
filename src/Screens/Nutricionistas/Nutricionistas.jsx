import React, { useEffect, useState } from "react"
import nutricionistaStyle from './Nutricionistas.module.css'
import DropdownUf from "../../Components/DropdownUf/DropdownUf"
import Header from "../../Components/Header/Header"
import searchIcon from '../../Assets/search.png'
import Footer from '../../Components/Footer/Footer'
import Card from "../../Components/Card/Card"
import arquivo from "./exemplo.js"
import imagem from '../../Assets/user-icon.png'
import { Pagination } from 'react-bootstrap'

function Nutricionistas(){
  const [selectedUF, setSelectedUF] = useState('');

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

    return visibleItems.map((nutricionista) => {

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
          handleClick={btnClick}
        />)

    });

  }

  const pageItems = [];
  const totalPages = Math.ceil(filteredNutricionistas.length / elementsPerPage);
  console.log("carregamento de pags ",filteredNutricionistas)

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
        handleClick={btnClick}
      />)
    })
  }

  function btnClick(){
    //direcionar para a pagina de conversa
    console.log("Clicado")
  }

  return (
    <div>
      <Header/>
      <div class={nutricionistaStyle.content}>

        <h1 class={nutricionistaStyle.mainTitle}>
          Nutricionistas
        </h1>
          
        <div class={nutricionistaStyle.divFilter}>
          <div class={nutricionistaStyle.filterUf}>
            <span>Filtrar UF</span>
            <DropdownUf onUfChange={handleUfChange} selectedUf={selectedUF}/>
          </div>
          

          <div class={nutricionistaStyle.divBusca}>
            <input type="text" id="busca" class={nutricionistaStyle.txtBusca} 
            placeholder="Buscar nutricionista ou local"/>
            <img src={searchIcon} class={nutricionistaStyle.btnBusca} alt="Buscar"/>
          </div>
        </div>

        <div class={nutricionistaStyle.lista}>
          {
            selectedUF == '' ? 
            renderNotFilteredItems()
            :
            renderFiltered()
          }
        </div>

      </div>
      
      <div class={nutricionistaStyle.paginationDiv}>
        <Pagination className={nutricionistaStyle.pagination}>
          {pageItems}
        </Pagination>
      </div>

    <Footer/>
    </div>

  )
}

export default Nutricionistas;