function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  function myMenu()
  {
    document.getElementById("click").classList.remove("active")
    document.getElementById("all-item").classList.add("active")

  }
  function myBack()
  {
    document.getElementById("click").classList.add("active")
    document.getElementById("all-item").classList.remove("active")

  }
  function myCategories()
  {
    document.getElementById("click2").classList.remove("active")
    document.getElementById("click").classList.add("active")
    document.getElementById("all-item").classList.add("active")
  }
  function myBack2()
  {
    document.getElementById("click2").classList.add("active")
    document.getElementById("all-item").classList.remove("active")

  }
  function myChat()
  {
    document.getElementById("all-item").classList.add("active")
    document.getElementById("click").classList.add("active")

    document.getElementById("click2").classList.add("active")
    document.getElementById("message").classList.remove("active")

  }

