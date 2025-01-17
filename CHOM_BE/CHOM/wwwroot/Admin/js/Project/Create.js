﻿

$(document).ready(function () {
    var _idImage;
    var _fileImage;
    function deleteFile() {
        if ($('.txt-Img').val()) {
            $.ajax({
                url: "/Admin/Image/DeleteImageGT",
                dataType: "Json",
                type: "POST",
                data: {
                    deleteFile: $('.txt-Img').val()
                },
            });
            $('.txt-Img').attr("value", "");
        }
    }
    $('.txt-validation-year').keypress(function (event) {
        if (event.which < '48' || event.which > '57') {
            event.preventDefault();
        }
    })
    $('.img-gt').on("change", function () {
        if ($(this).val() == '') {
            return;
        }
        $('.spinner-single').css('display', 'block');
        $(this).prop('disabled', true);
        var _size = this.files[0].size;
        var _mathSize = (_size / 1048576).toFixed(2);
        if (_mathSize > 1) {
            $('.txt-notification-gt').css('display', 'block');
            $('.txt-notification-gt').text('Vui lòng upload hình dưới 1MB');
            $('.img-gt').val('');
            $('.spinner-single').css('display', 'none');
            $(this).prop('disabled', false);
            return;
        }
        setTimeout(function () {
            $('.txt-notification-gt').css('display', 'none');
            $('.txt-notification-gt').text('');
            var files = $('.img-gt').prop("files");
            var url = "/Admin/Image/AddImage?handler=File";
            formData = new FormData();
            formData.append("File", files[0]);
            deleteFile();
            $.ajax({
                url: url,
                type: "POST",
                dataType: "JSON",
                data: formData,
                contentType: false,
                processData: false,
                cache: false,
                success: function (res) {
                    if (res.status == false) {
                        console.log("error");
                    }
                    else {
                        var link = "/uploadFiles/" + res.fileName;
                        $('.uploadSingleFile').css("display", "block");
                        $('.uploadSingleFile').attr("src", link);
                        $('.txt-Img').val(res.fileName);
                    }
                    $('.spinner-single').css('display', 'none');
                    $('.img-gt').prop('disabled', false);
                }
            });
        }, 1000)
    })
    $('.btn-success-delete').on('click', function () {
        $.ajax({
            url: '/Admin/Image/DeleteMulFile',
            type: "POST",
            dataType: "JSON",
            data: {
                id: _idImage,
                filename: _fileImage
            },
            success: function (res) {
                var clickEvent = '.' + _idImage;
                $(clickEvent).remove();
                $('#exampleModal').modal('hide');
            }
        })
    })
    $('.uploadMultiple').on("change", function () {
        if ($(this).val() == '')
            return;
        $('.spinner-multiple').css('display', 'block');
        $(this).prop('disabled', true);
        setTimeout(function () {
            var formData = new FormData();
            var listImage = $('.uploadMultiple').get(0).files;
            for (var k = 0; k < listImage.length; k++) {
                var _size = listImage.item(k).size;
                var _mathSize = (_size / 1048576).toFixed(2);
                if (_mathSize > 1) {
                    $('.txt-validation').css('display', 'block');
                    $('.txt-validation').text('Vui lòng upload hình dưới 1MB');
                    $('.uploadMultiple').val('');
                    $('.spinner-multiple').css('display', 'none');
                    $('.uploadMultiple').prop('disabled', false);
                    return;
                }
                formData.append('files', listImage.item(k));
            }
            $('.txt-validation').css('display', 'none');
            var url = "/Admin/Image/AddMulImage?handler=files";
            $.ajax({
                url: url,
                type: "POST",
                dataType: "JSON",
                data: formData,
                contentType: false,
                processData: false,
                cache: false,
                success: function (res) {
                    if (res.status == true) {
                        $('.txt-validation').css('display', 'none');
                        var data = res.data;
                        data.forEach(function (item, index) {
                            var _img = document.createElement('img');
                            var _i = document.createElement('i');
                            var _a = document.createElement('a');
                            var _li = document.createElement('li');
                            var _ul = document.createElement('ul');
                            var _divhover = document.createElement('div');
                            var _divproductimg = document.createElement('div');
                            var _divproductbox = document.createElement('div');
                            var _divcol = document.createElement('div');
                            var _linkClassImage = '.btn-delete-' + item.image;
                            _i.classList.add('fa-solid', 'fa-trash', 'cl-trash');
                            _a.classList.add(item.id);
                            _a.appendChild(_i);
                            _li.setAttribute('data-image', item.image);
                            _li.setAttribute('data-id', item.id);
                            _li.setAttribute('data-bs-toggle', 'modal');
                            _li.setAttribute('data-original-title', 'test');
                            _li.setAttribute('data-bs-target', '#exampleModal');
                            _li.appendChild(_a);
                            _ul.appendChild(_li);
                            _divhover.classList.add('product-hover');
                            _divhover.appendChild(_ul);
                            _img.classList.add('img-fluid');
                            _img.setAttribute('data-img', item.image);
                            _img.setAttribute('src', '/fileImages/' + item.image);
                            _divproductimg.classList.add('product-img');
                            _divproductimg.appendChild(_img);
                            _divproductimg.appendChild(_divhover);
                            _divproductbox.classList.add("product-box");
                            _divproductbox.appendChild(_divproductimg);
                            _divcol.classList.add("col-xl-3", "col-lg-4", "col-sm-6", item.id);
                            _divcol.appendChild(_divproductbox);
                            document.getElementsByClassName('list-multifile')[0].appendChild(_divcol);
                            _li.onclick = function () {
                                _idImage = $(this).data('id');
                                _fileImage = $(this).data('image');
                            }
                        })
                    }
                    else {
                        $('.txt-validation').text('');
                        $('.txt-validation').css('display', 'block');
                        $('.txt-validation').text(res.message);
                    }
                    $('.spinner-multiple').css('display', 'none');
                    $('.uploadMultiple').prop('disabled', false);
                }
            });
        }, 1000)
    })
})