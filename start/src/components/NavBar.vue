<script setup>
const emit = defineEmits(["logout"]);

const handleLogout = () => {
  emit("logout");
};
</script>

<template>
  <!-- navbar -->
  <nav
    class="sticky top-0 z-10 p-3 bg-purple-400 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
  >
    <div class="flex justify-between items-center">
      <div>
        <a class="text-2xl font-bold px-6 cursor-pointer">
          <span>Vue Router</span>
        </a>
        <a class="text-2xl font-bold px-6 cursor-pointer">
          <span>Add Product</span>
        </a>
      </div>

      <a
        class="text-2xl font-bold px-6 cursor-pointer hover:text-red-500"
        @click="handleLogout"
      >
        <span>Logout</span>
      </a>
    </div>
  </nav>
  <br />
</template>
