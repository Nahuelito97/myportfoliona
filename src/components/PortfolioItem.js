import React from "react";

function PortfolioItem({ title, imgUrl, stack, link, description, img }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-5 border-stone-900 dark:border rounded-md overflow-hidden"
    >
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={imgUrl} alt="portfolio" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{title}</div>
          <p class="text-gray-700 text-base">{description}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <div class="mb-4">
            <img src={img} class="h-10 max-w-6 rounded-full float-left" alt="" />
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            # {stack[0]}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            # {stack[1]}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            # {stack[2]}
          </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default PortfolioItem;
