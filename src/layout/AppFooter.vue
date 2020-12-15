<template>
    <footer style="background-color: #F5DCDF">
        <div class="container">
            <div class="row row-grid align-items-center">
                <div class="col-7 col-md-4">
                    <div class="mail">
                        mail: vivredoux@gmail.fr
                    </div>
                    <div class="site">
                        <a href="#">www.vivredoux.com</a>
                    </div>
                </div>
                <div class="tel d-flex align-items-center col-7 col-md-4">
                    <div>
                        tel:
                    </div>
                    <div class="list">
                        <ul style="list-style:none">
                            <li><a href="#">0143778547</a></li>
                            <li><a href="#">0143551348</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-5 col-md-4 text-md-center btn-wrapper">
                    <a target="_blank" rel="noopener" href="https://twitter.com/creativetim"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.facebook.com/creativetim"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://dribbble.com/creativetim"
                       class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-dribbble"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://github.com/creativetimofficial"
                       class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Star on Github">
                        <i class="fa fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
