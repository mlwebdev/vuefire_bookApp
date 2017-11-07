<template>
<div id="app" class="container">
    <div class="page-header">
        <h1>Vue.js 2 &amp; Firebase App</h1>

        <div class="panel panel-default"> <!-- Start panel-heading-->
            <div class="panel-heading">
                <p>&nbsp;</p>
                <h3>Add Book</h3>
            </div> <!-- End panel-heading-->

            <div class="panel-body">
                <form id="form" class="form-inline" v-on:submit.prevent="addBook">

                    <div class="form-group">
                        <label for="bookTitle" class="rgt">Title:</label>

                        <input type="text" id="bookTitle" class="form-control"
                          v-model="newBook.title"> <!-- Book Input -->

                        <label for="bookAuthor" class="lft-rgt">Author:</label>
                        <input type="text" id="bookAuthor" class="form-control"
                          v-model="newBook.author"> <!-- Author Input -->

                        <label for="bookUrl" class="lft-rgt">URL:</label>
                        <input type="text" id="bookUrl" class="form-control"
                          v-model="newBook.url"> <!-- Url Input -->

                        <input type="submit" class="btn btn-primary" value="Add Book "> <!--  Submit button-->
                    </div> <!-- End  .form-group -->
                </form> <!-- End  #form .form-inline -->
            </div> <!-- End  .panel-body -->
        </div> <!-- End .panel .panel-default -->
        <p>&nbsp;</p>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Books Lists</h3>
            </div>
            <div class="panel-body">
                <table class="table table-striped">
                    <thead> <!-- Start Table Header -->
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>
                                Author
                            </th>
                            <th>
                                Delete
                            </th>
                        </tr>
                    </thead><!-- End Table Header -->
                    <tbody>
                        <tr v-for="book in books"> <!-- Loop through  & show books in firebase database -->
                            <td>
                                <a :href="book.url">{{book.title}}</a> <!-- Bind url to book title (hyperlink) -->
                            </td>
                            <td>
                                {{book.author}}
                            </td>
                            <td> <!-- removeBook to delete book from firebase database -->
                                <span class="glyphicon glyphicon-trash" @click="removeBook(book)"></span>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
  import { booksRef } from '../firebase' //  Import  booksRef from file src/firebase.js
  import toastr from 'toastr'
  export default {
      name: 'crud',
      // firebase object corresponds to file  src/firebase.js
      firebase: {
          books: booksRef
      },
      data() {
          return {
            // newBook object with properties to push to firebase database
              newBook: {
                  title: ' ',
                  author: ' ',
                  url: ' '
              }
          }
      },
      methods: {
          addBook: function() {
            // Validate if fields are empty
              if (this.newBook.title != ' ') {
                  if (this.newBook.author != ' ') {
                      if (this.newBook.url != ' ') {
                          booksRef.push(this.newBook); // push to firebase database
                          toastr.success("Book Added!") // notification
                      }
                  }
              }
              // Reset fields to empty
              this.newBook.title = ' ';
              this.newBook.author = ' '
              this.newBook.url = ' '
          },
          // Remove book from firebase database
          removeBook: function(book) {
              booksRef.child(book['.key']).remove();
              toastr.success("Book removed!")
          }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.rgt {
  margin-right: 10px;
}
.lft-rgt {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
