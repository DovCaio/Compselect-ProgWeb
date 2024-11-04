

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Partner({name, classOfH3}: any){


    return (

        <div className="partner">

            <h3 className={classOfH3}>
                {name}
            </h3>

        </div>

    )
}