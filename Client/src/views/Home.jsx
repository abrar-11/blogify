import React from "react";
import img1 from "../assets/categories/ui.svg";
import img2 from "../assets/categories/ux.svg";
import img3 from "../assets/categories/seo.svg";
import img4 from "../assets/categories/popular.svg";
import img5 from "../assets/categories/essentials.svg";
import thumbnail from "../assets/thumbnail-1.svg";
export default function Home() {
  return (
    <div>
      {/* Reading List Carousal */}
      <div class="flex flex-col">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-bold">Reading List</h2>
          <button class="text-sm text-gray-600 hover:text-gray-800 focus:outline-none">
            View All
          </button>
        </div>
        <div class="overflow-hidden">
          <div class="flex gap-4">
            <div class="w-1/5 rounded-xl overflow-hidden">
              <img
                src={img1}
                alt="Card 1"
                class="w-full h-full object-cover overflow-hidden"
              />
            </div>
            <div class="w-1/5 rounded-xl overflow-hidden">
              <img
                src={img2}
                alt="Card 2"
                class="w-full h-full object-cover overflow-hidden"
              />
            </div>
            <div class="w-1/5 rounded-xl overflow-hidden">
              <img
                src={img3}
                alt="Card 3"
                class="w-full h-full object-cover overflow-hidden"
              />
            </div>
            <div class="w-1/5 rounded-xl overflow-hidden">
              <img
                src={img4}
                alt="Card 3"
                class="w-full h-full object-cover overflow-hidden"
              />
            </div>
            <div class="w-1/5 rounded-xl overflow-hidden">
              <img
                src={img5}
                alt="Card 3"
                class="w-full h-full object-cover overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Card  horizontal*/}

      <div className="my-20 ">
        <h1 className="text-4xl font-semibold">Random</h1>
        <div className="flex items-center gap-6 bg-white mt-5 rounded shadow">
          <div className="p-5 w-1/2 flex flex-col space-y-4">
            <p className="textLight uppercase">
              by <span className="text-gray-700">Bruce Wayne</span> IN{" "}
              <span className="text-gray-700">Essentials</span>
            </p>
            <h1 className="text-2xl">
              Mind BLowing Twitter Stats and Facts on Our Favorite Network
              (2018)
            </h1>
            <p className="textLight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              corporis officiis odit sint ex doloribus harum consequatur
              distinctio totam veritatis.
            </p>
          </div>
          <div className="w-1/2 h-full">
            <img
              src={thumbnail}
              alt="Card 1"
              class="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </div>
      </div>

      {/* Blog Card Vertical  */}

      <div className="my-20 ">
        <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 ">
          {[1, 1, 1, 1].map((e) => {
            return (
              <div className="items-center gap-6  mt-5 ">
                <div className="h-80 rounded overflow-hidden shadow">
                  <img
                    src={thumbnail}
                    alt="Card 1"
                    class="w-full h-full object-cover overflow-hidden"
                  />
                </div>
                <div className="py-4 flex flex-col space-y-4">
                  <p className="textLight uppercase">
                    by <span className="text-gray-700">Bruce Wayne</span> IN{" "}
                    <span className="text-gray-700">Essentials</span>
                  </p>
                  <h1 className="text-2xl">
                    Mind BLowing Twitter Stats and Facts on Our Favorite Network
                    (2018)
                  </h1>
                  <p className="textLight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis corporis officiis odit sint ex doloribus harum
                    consequatur distinctio totam veritatis.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
