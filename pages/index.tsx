import type { NextPage } from 'next'

const testWorks = [1, 2, 3, 4, 5];

const Home: NextPage = (props) => {
  return (
    <main>
      <div id="hero" className="bg-dark flex justify-center items-center">
        <div className="container">
          <div className="text-center">
            <h1 className="text-white uppercase text-7xl mb-4">
              Rizki Khair
            </h1>
            <h3 className="text-white uppercase text-3xl">
              Frontend Web Deloveper
            </h3>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="flex justify-center">
            <div className="lg:w-2/4">
              <div className="main-title">
                <h1 className="font-bold text-main">Latest Works</h1>
                <p>
                  When I have free time, I learn new things or make something. for example, learning React.js or expanding my knowledge of Vue.js and implementing it.  This is not a project or what I have done in a company
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="lg:w-3/4 w-full">
              <div className="works-filter rounded-md mx-4">
                <ul className="filter list mb-20 py-4 text-center relative">
                  <li className="list-item cursor-pointer my-1 sm:my-0 capitalize">asa</li>
                  {/* <li
                    v-for="item in items"
                    :key="item.id"
                    :id="'porto-' + item.id"
                    :class="[
                      'list-item',
                      { 'font-bold border-b': activeFilter === item.id }
                    ]"
                    class="text-white hover:text-gray-600 cursor-pointer my-1 sm:my-0"
                    role="button"
                    @click="setActive">
                    item.name
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center -mx-2">
            {
              testWorks.map((work: any) => {
                return (
                  <div key="{work}" className="xl:w-1/3 lg:w-2/4 w-full px-2 py-1.5">
                    <div className="work-item relative rounded-md border h-64 p-2">
                      <img className="rounded-md w-full" />
                      <div className="
                        work-overlay
                        overflow-hidden
                        absolute left-0 right-0
                        bottom-0 rounded-md flex
                        justify-center items-center
                        bg-opacity-10
                      ">
                        <div className="flex-1 text-center">
                          <div className="font-bold uppercase"> Name </div>
                          <div className="my-4">
                            <a
                              target="_blank"
                              className="
                              text-sm rounded-full
                              bg-primary text-white py-2 px-4
                              flex-inline jutify-center
                              items-center">
                              <img width="16" className="inline"/>
                              github
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="hidden w-1/2 md:block px-4">
              <img className="rounded-xl mx-8" width="400"/>
            </div>
            <div className="px-4 md:w-1/2">
              <div className="main-title two">
              <h1 className="font-bold text-main">About Me</h1>
                <p>
                  I started actively coding and learning programming languages ​​in 2017. In the same years when I was in college, I got several projects for VB, Website until I graduated in December 2018. When graduated.I decided to work in this field.
                </p>
                <p className="pt-4">
                  I started working at Olsera as a frontend in August 2019. I handle the module (project). The module is an online booking feature. Feature in that module is accessing without login, access locations use google maps API, pick a time, and payments use credit card, bank transfer & pay later. Where the payment gateway using Xendit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="flex justify-center">
            <div className="lg:w-2/4">
              <div className="main-title">
                <h1 className="font-bold text-main">Experience</h1>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-cenetr px-10">
            <div className="px-4 md:w-1/2 rounded-md">
              <div className="text-4xl mb-2 text-gray-400 capitalize">
                Name
              </div>
              <div className="text-xl mb-8 capitalize font-bold">
                start - end
              </div>
              <div className="text-gray-600 italic mb-6">
                "job description"
              </div>
              <div>
                <a
                  target="_blank"
                  className="bg-primary text-white rounded-full px-6 py-2">
                  See Company
                </a>
              </div>
            </div>

            <div className="px-4 md:w-1/3">
              <div className="bg-white shadow-xl rounded-md border flex justify-center items-center p-6">
                <div className="px-6 flex justify-center items-center -mx-4 mb-4">
                  <a
                    className="px-4 cursor-pointer"
                    target="_blank">
                    company one
                    {/* <img src="img/olsera.png"/> */}
                  </a>
                  <a
                    className="px-4 cursor-pointer"
                    target="_blank">
                    company two
                    {/* <img src="img/popaket.png"/> */}
                  </a>
                </div>
                
                <div className="px-6">
                  <a
                    className="px-4 cursor-pointer"
                    target="_blank">
                    company three
                    {/* <img src="img/devixel.png"/> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
