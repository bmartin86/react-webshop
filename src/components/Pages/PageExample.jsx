function Page ({ title, description }) {
  // const fakeProps = {
  //   title: "Some title",
  //   description: "Lorem ipsum"  
  // }

  // const title = fakeProps.title;
  // const description = fakeProps.description;
  
  // const { title, description } = props; // destructuring components
  // const { title, description } = fakeProps; // destructuring components
  return (
    <>
      {title && <h1>{ title }</h1>}
      <p>{ description }</p>
    </>

  )
}