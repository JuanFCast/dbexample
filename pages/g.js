import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <form>
      

      <div className="mb-3">
        <label for="InputgroupId" className="form-label">groupId</label>
        <input type="email" className="form-control" />
      </div>

      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">manager</label>
        <input type="password" className="form-control" />
      </div>

      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">ownerId</label>
        <input type="password" className="form-control" />
      </div>

      <div className="mb-3">
        <select className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  )
}