import LoadingStyle from '@/Components/Loading.module.css'

export default function Loading(){

    return (

        <div className={LoadingStyle.container}>

        <div className={LoadingStyle.socket}>


            {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className={`${LoadingStyle.gel} ${LoadingStyle[`c${i + 1}`]} ${LoadingStyle.r1}`}>
                    <div className={`${LoadingStyle.hexBrick} ${LoadingStyle.h1}`}></div>
                    <div className={`${LoadingStyle.hexBrick} ${LoadingStyle.h2}`}></div>
                    <div className={`${LoadingStyle.hexBrick} ${LoadingStyle.h3}`}></div>
                </div>
            ))}

            {Array.from({ length: 18 }, (_, i) => (
                <div key={i + 6} className={`${LoadingStyle.gel} ${LoadingStyle[`c${i + 7}`]} ${LoadingStyle.r2}`}>
                    <div className={`${LoadingStyle.hexBrick} ${LoadingStyle.h1}`}></div>
                    <div className={`${LoadingStyle.hexBrick} ${LoadingStyle.h2}`}></div>
                    <div className={`${LoadingStyle.hexBrick} ${LoadingStyle.h3}`}></div>
                </div>
            ))}

            {Array.from({ length: 18 }, (_, i) => (
                <div key={i + 24} className={`${LoadingStyle.gel} ${LoadingStyle[`c${i + 19}`]} ${LoadingStyle.r3}`}>
                    <div className={`${LoadingStyle.hexBrick} ${LoadingStyle.h1}`}></div>
                    <div className={`${LoadingStyle.hexBrick} ${LoadingStyle.h2}`}></div>
                    <div className={`${LoadingStyle.hexBrick} ${LoadingStyle.h3}`}></div>
                </div>
            ))}
        </div>

        </div>
    )
    

}