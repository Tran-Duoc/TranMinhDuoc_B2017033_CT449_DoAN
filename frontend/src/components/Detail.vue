<template>
  <div class="grid grid-cols-12 grid-rows-4 gap-8 p-10">
    <div class="col-span-4 row-span-4">
      <img
        src="https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1928&q=80 "
        alt=""
        class="bg-cover w-full"
      />
    </div>
    <div class="col-span-8 row-span-4">
      <div>
        <div class="grid grid-cols-1 grid-rows-6">
          <div
            class="text-2xl font-semibold capitalize border-b-2 pb-5 border-gray-500 row-span-1"
          >
            title
          </div>
          <div class="text-lg font-medium mt-5 row-start-2 row-span-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at,
              hic molestiae sed beatae eaque. Possimus, sunt laudantium
              necessitatibus fugit vel molestias, quis temporibus rem non
              dolores eveniet! Reiciendis, corporis. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Quos praesentium officia sit numquam
              corporis id cupiditate explicabo quisquam! Mollitia praesentium
              reiciendis est blanditiis similique, harum cumque libero maiores
              dolorum ducimus.
            </p>
            <div class="mt-5 border-t-2 border-gray-500 pt-5">
              Tác giả: Trần Được
            </div>
            <div class="mt-3">Ngày tạo: 22/12/2023</div>
          </div>
          <div class="row-start-6 row-span-1 mt-10">
            <div class="flex gap-5">
              <button type="button" class="bg-gray-300 py-4 px-16 rounded-xl">
                Xóa bài
              </button>
              <button type="button" class="bg-gray-300 py-4 px-16 rounded-xl">
                Chỉnh sửa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
