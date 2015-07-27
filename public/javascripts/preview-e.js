    var getAddrForUrl = function(string) {
        var bitcore = require('bitcore')
        var network = 'mainnet' // or 'testnet'
        var Buffer = bitcore.deps.Buffer
        var mpk = new bitcore.PublicKey('02674b07011a99c61f67543f3d2c6aba64770a8fb4856d89dfe563d0df453e1618')
            // url to address
        var calcAddr = function(urlString, masterPublicKey) {
            var urlHash = bitcore.crypto.Hash.sha256(new Buffer(urlString))
            var urlBN = bitcore.crypto.BN.fromBuffer(urlHash)
            var urlPoint = bitcore.crypto.Point.getG().mul(urlBN).add(masterPublicKey.point)
            var urlAddress = bitcore.PublicKey.fromPoint(urlPoint).toAddress(network)
            return urlAddress
        }
        return calcAddr(string, mpk).toString()
    }
    $('#id_status').preview({
            key: '66ec62e960ec42c79a314dcae85f2d10'
        }) 
        .on('loading', function() {
            $(this).prop('disabled', true);
            $('form .button').html('<i class="icon-spinner icon-spin"></i>');
            // $("#boxes").masonry()
            mason()
        }).on('loaded', function() {
            $(this).prop('disabled', false);
            $('form .button').text('Next');
            setTimeout(function(){
                mason()
                // $("#boxes").masonry()
            },100)
        });
    $('form .button').on('click', function() {
        $('#preview_form').trigger('submit')
        $('#preview_form').hide()
        mason()
        // $("#boxes").masonry()
    });
    $('#preview_form').on('submit', function() {
        // Preview data.
        var preview = $('#id_status').data('preview');
        preview.status = $('#id_status').val();
        preview.btcAddress = getAddrForUrl(preview.original_url)

        preview.btcAddressUp = getAddrForUrl('+'+preview.original_url)
        preview.btcAddressDown = getAddrForUrl('-'+preview.original_url)

        console.dir(preview)
            // Close the selector
        $('#id_status').trigger('close');
        // Clear the url form.
        $('#id_status').val('');
        $('#title').text('Preview your game now. You can activate it via sending at least 0.0001 BTC to '+preview.btcAddress)
        .addClass('blink').removeClass('medium').addClass('small')//.width('100%')
        $('#title').parent().width('65%')
        // Create a post using mustache, i.e. the nice way.
        // var template = [
        //     // '<div class="row">',
        //     //   '<div class="large-12 columns">',
        //     //     '<p>{{status}}</p>',
        //     //   '</div>',
        //     // '</div>',
        //     '<div class="row">',
        //     '<div class="large-5 columns">',
        //     '<img class="thumb" src="{{thumbnail_url}}"></img>',
        //     '</div>',
        //     '<div class="large-7 columns">',
        //     '<img class="favicon" src="{{favicon_url}}"></img>',
        //     '<a href="{{original_url}}">{{title}}</a>',
        //     '<p>{{description}}</p>',
        //     '<p>Now send at least 0.0001 coins to: </p>',
        //     '<h5><a href="bitcoin:123654356543456543">{{btcAddress}}</a></h5>',
        //     '<p>Add countdown... 15 min </p>',
        //     '</div>',
        //     '</div>'
        // ].join('');



        template = '<article data-tags="reblog" style="position: absolute; visibility: visible; opacity: 1; box-shadow: 1px 1px 58px 17px #FFA;" '+
        'class="box post type-photo small masonry-brick"><div class="post-content clearfix">'
        if(preview.thumbnail_url)
            template = template +'<div class="photo-wrap"><a href="{{original_url}}"><img alt="{{description}}" data-width="1280" src="{{thumbnail_url}}" class="photo blink"></a></div>'
        template = template 
        +'<div class="caption clearfix rte"><h2>'
        +'<span>{{title}}</span></h2><div class="post-type-icon-wrap"><div class="border"><img src="{{favicon_url}}" width="20px"></div></div><h3>Read more at <a href="{{original_url}}">{{provider_name}}</a></h3>'
        + '<p>{{description}}</p><p class="tumblr-source"></p><h6 class="blink">Send now at least 0.0001 BTC to following address: </h6><a class="blink" href="http://blockchain.info/address/{{btcAddress}}">{{btcAddress}}</a>'
        // + '<h6>DOWN Address: </h6><a href="http://blockchain.info/address/14EwZYaiz8MTxUCjnkhUPnBxU5x8hsSTut">184ghiwehjshvkjsdhfjkdjkfsjkfldkd</a><p></p>'
        + '<h5>Total in: <span class="blink">WAITING...</span></h5></div></div><div class="post-meta"><div class="cell clearfix timestamp"><a>'//' <span>Time left: 23 hours</span>'
        +'</a></div><div class="spacer"><div class="spacer"></div></div><div class="cell clearfix"><span>Send Now!</span></div><div class="cell clearfix"><span> </span></div><div class="cell clearfix"><span> </span></div></div></article>'
        html = Mustache.to_html(template, preview);
        // $('#boxes').prepend(html);
        $(html).insertAfter('#preview')
        // $("#boxes").masonry()
        mason()
        $.post('/post', preview, function(e, r) {
            }, 'json').done(function() {
                // alert( "second success" )
            })
            .fail(function() {
                alert("error")
            })
            .always(function() {
                // $("#boxes").masonry()
                mason()
                    // alert( "finished" )
            })
        return false;
    });
