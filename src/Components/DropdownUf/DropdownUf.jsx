import React, { useState } from "react"
import DropdownUfStyle from "./DropdownUf.module.css"

function DropdownUf({selectedUf, onUfChange}){
  const ufs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

  function handleUfChange(event) {
    const selectedValue = event.target.value
    onUfChange(selectedValue)
  }

  return(
    <div class={DropdownUfStyle.dropdownUfDiv}>
      <select id="ufSelect" value={selectedUf} onChange={handleUfChange}>
        <option value="">UF</option>
        {ufs.map((uf) => (
          <option key={uf} value={uf}>
            {uf}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DropdownUf;