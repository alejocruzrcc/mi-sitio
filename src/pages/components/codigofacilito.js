import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default (props) => {
    const data = useStaticQuery(graphql`{
        codigofacilitoJson {
            data {
              courses {
                title
                progress
              }
            }
          }
    }`) // Hook
    console.log(data)
    return(
        <section>
            <div className="mt-24">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">Mis Cursos realizados en Código Facilito</h2>
                    <div className="flex">
                        {
                            data.codigofacilitoJson.data.courses.map(course =>(
                                <div className="shadow p-8 bg-white mr-4 rounded">
                                    <h4 className="font-bold">{course.title}</h4>
                                    <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 radius">Progreso: {course.progress}</span>
                                </div>
                            )
                            )
                        }
                    </div>   
                </div>
            </div>
        </section>
    );
}