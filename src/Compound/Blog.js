import React, { useState } from "react";
import  Pagination  from "./Pagination";
import Display from "./card"
import CreateBlog from "./createapp";
import EditBlog from "./Editblog"
const Blog =()=>{
    const data=[
        {
            userId: 1,
            id: 1,
            title:
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body:
              "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          },
          {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body:
              "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
          },
          {
            userId: 1,
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body:
              "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
          },
          {
            userId: 1,
            id: 4,
            title: "eum et est occaecati",
            body:
              "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
          },
          {
            userId: 1,
            id: 5,
            title: "nesciunt quas odio",
            body:
              "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
          },
          {
            userId: 1,
            id: 6,
            title: "dolorem eum magni eos aperiam quia",
            body:
              "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
          },
          {
            userId: 1,
            id: 7,
            title: "magnam facilis autem",
            body:
              "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
          },
          {
            userId: 1,
            id: 8,
            title: "dolorem dolore est ipsam",
            body:
              "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
          },
          {
            userId: 1,
            id: 9,
            title: "nesciunt iure omnis dolorem tempora et accusantium",
            body:
              "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
          },
          {
            userId: 1,
            id: 10,
            title: "optio molestias id quia eum",
            body:
              "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
          },
    ]
    const [blogs,setBlogs]=useState(data);
      const [showPage,setShowPage]=useState(4);
      const[pagination,setPagination]=useState({
          start:0,
          end:showPage
      })
      const onpaginationChange=(start,end)=>{
          setPagination({start:start,end:end})
      }
      const addpost = (blog) => {
        blog.id = blogs.length + 1
        setBlogs([...blogs, blog])
      }
      const delpost=(id)=>{
   setBlogs(blogs.filter((blog)=>blog.id !==id))
      }
     const[editing,setEditing]=useState(false);
     const intialState={
         id:null,
         title:" ",
         body:" ",
     }
     const[currentblog,setCurrentblog]=useState(intialState);
     

     const editpost=(blog)=>{
         setEditing(true);
         setCurrentblog({
            id: blog.id,
            title:blog.title,
            body:blog.body
         })

     }
     const updateBlog=(id,updatedblog)=>{
         setEditing(false);
         setBlogs(blogs.map((blog)=>(blog.id===id? updatedblog:blog)))
     }

    return(
        <div>{ }
      <Display blogs={blogs} editpost={editpost}
      delpost={delpost}
       pagination={pagination}/>
       {editing ? (<EditBlog
       updateBlog={updateBlog}
       currentblog={currentblog}
       seEditing={setEditing}
       />):(  <CreateBlog 
        addpost={addpost} />)
       }

      
      <Pagination
      showPage={showPage}
      onpaginationChange={onpaginationChange}
      total={blogs.length}
      />
     
        </div>
    )
}
export default Blog;