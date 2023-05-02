import React from "react";
import img1 from "../assets/categories/ui.svg";
import img2 from "../assets/categories/ux.svg";
import img3 from "../assets/categories/seo.svg";
import img4 from "../assets/categories/popular.svg";
import img5 from "../assets/categories/essentials.svg";
import thumbnail from "../assets/thumbnail-1.svg";
import darkThumbnail from "../assets/darkThumbnail.svg";
export default function Home() {
  return (
    <div>
      <div className="flex items-start my-20 gap-10 h-96">
        <div className="p-10 space-y-5 w-2/3 relative h-full overflow-hidden  rounded-md text-white ">
          <img
            src={darkThumbnail}
            alt="Card 1"
            class="w-full h-full rounded-md object-cover overflow-hidden absolute top-0 left-0 -z-10"
          />

          <h1 className="text-lg uppercase">By Bruce wayne in ispiration</h1>
          <h1 className="text-3xl">
            How to accept rejection gracefully and use it to grow.
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur nulla fuga in quaerat minus, laboriosam reiciendis sed
            vitae accusamus voluptates ex accusantium corrupti delectus officia.
          </p>
        </div>

        <div className="space-y-3 w-1/3">
          <div className="flex items-center justify-between pb-5 border-b-2 w-full">
            <p className="">New</p>
            <p className="textLight">View all new</p>
          </div>

          <div className="space-y-5">
            {[1, 2, 3, 4].map((e) => {
              return (
                <div className="">
                  <p className="textLight">SEP 05, 2023</p>
                  <p className="font-semibold textDark">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

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
