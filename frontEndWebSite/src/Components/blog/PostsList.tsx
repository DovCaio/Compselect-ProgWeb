import GenericBannerImage1 from "@/assets/images/ImageGenericaBannerPost1.webp"
import GenericBannerImage2 from "@/assets/images/ImageGenericaBannerPost2.webp"
import Post from "@/Components/blog/Post"

const posts = [
    {
      title: 'Post sobre Tecnologia',
      image: GenericBannerImage1,
      description: 'Este post aborda as últimas tendências em tecnologia e inovações.'
    },
    {
      title: 'Post sobre Saúde',
      image: GenericBannerImage2,
      description: 'Dicas e cuidados para manter uma vida saudável e equilibrada.'
    },
    {
      title: 'Post sobre Viagens',
      image: GenericBannerImage1,
      description: 'Descubra lugares incríveis para conhecer ao redor do mundo.'
    },
    {
      title: 'Post sobre Educação',
      image: GenericBannerImage2,
      description: 'A importância da educação e como ela transforma vidas.'
    }
  ];

export default function PostsList(){

    return (

        <section className="posts-list">
                <h2>Lista de Posts</h2>

                <section className="posts-section">
                    {
                        posts.map((post, index) => {
                            return <Post key={index} tittle={post.title} image={post.image} summary={post.description}/>
                        })
                    }
                </section>
        </section>

    )
}