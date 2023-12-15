import React from 'react'

const AddTask = () => {
  return (
    <div>
      <section>
        <h1 className='m-3'>Nouvelle tache</h1>
        <div className='card mx-3'>
            <form className='card-body' onSubmit={(e)=> this.handleSubmit(e)}>
                <div className='form-group'>

                    <label for="taskName"  required>Nom de la tache</label>
                    <input type="text"for="taskName" className='form-control' name="taskName" id='taskName' required/>
                    
                </div>
                <button type="submit" className='btn btn-primary'>Créer</button>
            </form>

        </div>
      </section>
    </div>
  )
}

export default AddTask
