import React, { useEffect, useState } from "react"
import nutricionistaStyle from "./Nutricionistas.module.css"
import DropdownUf from "../../Components/DropdownUf/DropdownUf"
import Header from "../../Components/Header/Header"
import searchIcon from "../../Assets/search.png"
import Footer from "../../Components/Footer/Footer"
import Card from "../../Components/Card/Card"
import arquivo from "./exemplo.js"
import imagem from "../../Assets/user-icon.png"
import {Pagination} from "react-bootstrap"
import unorm from "unorm"
import debounce from "lodash/debounce"
import imagem from '../../Assets/user-icon.png'
import { useNavigate } from "react-router-dom"

function Nutricionistas(){
  const [selectedUF, setSelectedUF] = useState('');
  const navigate = useNavigate();

  const nutricionistasData = arquivo;

  const [currentPage, setCurrentPage] = useState(1);
  const elementsPerPage = 5;


function Nutricionistas() {
  const [selectedUF, setSelectedUF] = useState("")
  const nutricionistasData = arquivo
  const [currentPage, setCurrentPage] = useState(1)
  const elementsPerPage = 5
  const [filteredNutricionistas, setFilteredNutricionistas] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const inputSearch = document.getElementById("busca")

  const debouncedSearch = debounce(search, 300)

  const [pageItems, setPageItems] = useState([])

  const handlePageChange = (page, totalPages) => {
    if (page != 0 && page != totalPages+1){
      setCurrentPage(page)
    }
    
  };

  useEffect(() => {
    filterNutricionistas()
  }, [selectedUF, currentPage, searchTerm])

  useEffect(() => {
    updatePageItems(Math.ceil(filteredNutricionistas.length / elementsPerPage))
  }, [filteredNutricionistas, elementsPerPage, currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedUF])

  function filterNutricionistas() {
    let filtered =
      selectedUF !== ""
        ? nutricionistasData.filter((nutricionista) => nutricionista.uf === selectedUF)
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
          handleClick={() => btnClick(nutricionista.id, nutricionista.nome)}
        />)

    });

  }

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

  function renderVisibleItems() {
    const indexOfFirst = (currentPage - 1) * elementsPerPage
    const indexOfLast = indexOfFirst + elementsPerPage
    const visibleItems = filteredNutricionistas.slice(indexOfFirst, indexOfLast)

    return visibleItems.map((nutricionista) => (
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
    )
  }
  function handleUfChange(uf) {
    setSelectedUF(uf);
  }

  function search() {
    let value = inputSearch.value
    setSearchTerm(value.trim())
  }

  function btnClick(id, nome){
    navigate(`/chat/${nome}`, {replace: true, state: {id: id, nome: nome}})
  }

  return (
    <div>
      <Header />
      <div className={nutricionistaStyle.content}>
        <h1 className={nutricionistaStyle.mainTitle}>Nutricionistas</h1>

        <div className={nutricionistaStyle.divFilter}>
          <div className={nutricionistaStyle.filterUf}>
            <span>Filtrar UF</span>
            <DropdownUf onUfChange={handleUfChange} selectedUf={selectedUF} />
          </div>

          <div className={nutricionistaStyle.divBusca}>
            <input
              type="text"
              id="busca"
              name="search"
              className={nutricionistaStyle.txtBusca}
              placeholder="Buscar nutricionista ou local"
            />

            <img src={searchIcon} className={nutricionistaStyle.btnBusca} alt="Buscar" onClick={search} />
          </div>
        </div>

        <div className={nutricionistaStyle.lista}>{renderVisibleItems()}</div>
      </div>

      <div className={nutricionistaStyle.paginationDiv}>
        <Pagination className={nutricionistaStyle.pagination}>
          {pageItems.map((item, index) => (
            <React.Fragment key={index}>
              {item === "ellipsis" ? (
                <span>...</span>
              ) : (
                item
              )}
            </React.Fragment>
          ))}
        </Pagination>
      </div>

      <Footer />
    </div>
  );
}
}

export default Nutricionistas;