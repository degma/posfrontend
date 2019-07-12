import React from 'react'
import List from '../components/compras/List'
import Form from '../components/compras/Form'

const ComprasPage = () => (
  <div>
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Articles</h2>
        <List />
      </div>
      <div className="col-md-4 offset-md-1">
        <h2>Add a new article</h2>
        <Form />
      </div>
    </div>
  </div>
)

export default ComprasPage