import React, { useEffect, useState } from "react"
import nutricionistaStyle from "./Nutricionistas.module.css"
import DropdownUf from "../../Components/DropdownUf/DropdownUf"
import Header from "../../Components/Header/Header"
import searchIcon from "../../Assets/search.png"
import Footer from "../../Components/Footer/Footer"
import Card from "../../Components/Card/Card"
import arquivo from "./exemplo.js"
import imagem from "../../Assets/user-icon.png"
import {Pagination} from 'react-bootstrap'
import unorm from "unorm"
import debounce from "lodash/debounce"

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

    if (searchTerm !== "") {
      const normalizedSearchTerm = unorm.nfd(searchTerm.toLowerCase()).replace(/[\u0300-\u036f]/g, "")

      filtered = filtered.filter((nutricionista) => {
        const nomeLower = unorm.nfd(nutricionista.nome.toLowerCase()).replace(/[\u0300-\u036f]/g, "")
        const cidadeLower = unorm.nfd(nutricionista.cidade.toLowerCase()).replace(/[\u0300-\u036f]/g, "")
        const especialidadesLower = unorm
          .nfd(nutricionista.especialidadesNutricao.join(" ").toLowerCase())
          .replace(/[\u0300-\u036f]/g, "")

        return (
          nomeLower.includes(normalizedSearchTerm) ||
          cidadeLower.includes(normalizedSearchTerm) ||
          especialidadesLower.includes(normalizedSearchTerm)
        );
      });
    }

    setFilteredNutricionistas(filtered)
  }

  function updatePageItems(totalPages) {
    const newPageItems = []
  
    newPageItems.push(
      <div
        className={nutricionistaStyle.btnActionPage}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        {"<"}
      </div>
    );
  
    const screenWidth = window.innerWidth

    let elementsBeforeEllipsis
    if (screenWidth <= 450) {
      elementsBeforeEllipsis = 1
    } else if (screenWidth <= 768) {
      elementsBeforeEllipsis = 3
    } else {
      elementsBeforeEllipsis = 5
    }
  
    for (let page = 1; page <= totalPages; page++) {
      if (
        page === 1 ||
        page === totalPages ||
        Math.abs(page - currentPage) <= elementsBeforeEllipsis
      ) {
        newPageItems.push(
          <Pagination.Item
            key={page}
            onClick={() => handlePageChange(page)}
            className={nutricionistaStyle.paginationItem}
            style={{
              backgroundColor: page === currentPage ? "#6828ED" : "white",
            }}
          >
            {page}
          </Pagination.Item>
        );
      } else if (newPageItems[newPageItems.length - 1] !== "ellipsis") {
        newPageItems.push("ellipsis")
      }
    }
  
    newPageItems.push(
      <div
        className={nutricionistaStyle.btnActionPage}
        onClick={() => handlePageChange(currentPage + 1, totalPages)}
      >
        {">"}
      </div>
    );
  
    setPageItems(newPageItems)
  }
  

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
        imagemPerfil={imagem}
        handleClick={btnClick}
      />
    ));
  }

  function handleUfChange(uf) {
    setSelectedUF(uf);
  }

  function search() {
    let value = inputSearch.value
    setSearchTerm(value.trim())
  }

  useEffect(() => {
    if (inputSearch) {
      const handleKeyPress = ({ key }) => {
        if (key === "Enter") {
          debouncedSearch();
        }
      };

      inputSearch.addEventListener("keyup", handleKeyPress)

      return () => {
        inputSearch.removeEventListener("keyup", handleKeyPress)
      }
    }
  }, [inputSearch, debouncedSearch])

  function btnClick() {
    // direcionar para a página de conversa
    console.log("Clicado")
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
                //<Pagination.Ellipsis key={index} disabled />
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

export default Nutricionistas;