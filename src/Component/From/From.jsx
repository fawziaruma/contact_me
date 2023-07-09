import "./From.css"

const From = () => {
  return (
    <div>
        <form>
            <label>Name</label>
            <input type="text" name={name} />
            <label>Email</label>
            <input type="email" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <input type="submit" />
        </form>

    </div>
  )
}

export default From