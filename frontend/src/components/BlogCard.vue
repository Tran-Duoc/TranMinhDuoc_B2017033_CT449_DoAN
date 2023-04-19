<template>
  <div>
    <div class="flex-1 p-5 bg-slate-300">
      <div class="grid grid-cols-12 grid-rows-4 gap-2">
        <div class="col-span-4 bg-red-500 row-span-4">
          <img
            src="https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1928&q=80 "
            alt=""
            class="bg-cover w-full"
          />
        </div>
        <div class="col-start-5 col-span-8 row-span-4 bg-red-500">
          <span class="text-lg font-semibold">Title</span>
          <p class="font-light mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            dolorem neque harum aspernatur placeat laboriosam eos labore
            possimus quisquam, sint perspiciatis nemo voluptatum numquam
            repellendus est unde, minus debitis cumque!
          </p>
          <div class="font-semibold mt-3">Tác Giả : Tran Duoc</div>
          <div>Ngay tao: 22/12/2002</div>
          <button
            class="mt-10 bg-green-400 py-4 px-10 rounded-2xl text-lg font-bold text-white"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
