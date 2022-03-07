const add = document.querySelector('button')
add.addEventListener('click', function() {
    const input = document.querySelector('input').value
    if (input === "") {
        return alert("masukan list")
    }

    const list = document.createElement('li')
    list.innerHTML = `<span>▪️ ${input}</span>`

    const myList = document.querySelector('#listTodo')
    myList.appendChild(list);
    document.querySelector('input').value = ""

    list.querySelector('span').addEventListener('click', function(event) {
        event.target.classList.toggle('checked');
    })
    list.classList.add("mb-3")

    const hapus = document.createElement('button');
    hapus.classList.add('ms-auto')
    hapus.classList.add('btn')
    hapus.classList.add('btn-danger')
    hapus.innerHTML = 'Delete'
    list.appendChild(hapus);

    hapus.addEventListener('click', function() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                list.remove()
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    })
})