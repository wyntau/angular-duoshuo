(function(angular, window){
    var ngDuoshuo = angular.module('ngDuoshuo', []);

    ngDuoshuo.provider('$duoshuo', function(){

        var loadScript = function(src, cbk) {
            var script = document.createElement('script');
            script.charset = 'utf-8';
            script.type = 'text/javascript';
            script.onload = script.onreadystatechange = function() {
                if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
                    script.onload = null;
                    script.onreadystatechange = null;
                    if (cbk) {
                        cbk();
                    }
                }
            };
            script.src = src;
            document.body.appendChild(script);
        };

        var prepareComment = function(threadKey, url){
            var el = document.createElement('div'),
                ds = document.getElementById('ds-thread');
            el.setAttribute('data-thread-key', threadKey);
            el.setAttribute('data-url', url);
            DUOSHUO.EmbedThread(el.outerHTML);
            ds.appendChild(el);
        };

        this.setShortName = function(name){
            window.duoshuoQuery = {
                short_name: name
            };
        };

        this.$get = ['$location', function($location){
            var loadComment = function(threadKey) {
                if (!angular.isDefined(window.duoshuoQuery) || !angular.isDefined(window.duoshuoQuery.short_name)) {
                  throw new Error('No duoshuo shortname defined');
                } else if (!angular.isDefined(threadKey)) {
                  throw new Error('No duoshuo thread key defined');
                } else if (angular.isDefined(window.DUOSHUO)) {
                  prepareComment(threadKey, $location.absUrl());
                } else {
                  loadScript('http://static.duoshuo.com/embed.js', function(){
                    prepareComment(threadKey, $location.absUrl());
                  });
                }
            };

            return {
                loadComment: loadComment
            };
        }];
    });

    ngDuoshuo.directive('duoshuo', ['$duoshuo', function($duoshuo){
        return {
            restrict: 'AC',
            replace: true,
            scope: {
                threadKey: '=duoshuo'
            },
            template: '<div id="ds-thread" class="ds-thread"></div>',
            link: function(scope){
                scope.$watch('threadKey', function(threadKey) {
                    if (angular.isDefined(threadKey)) {
                        $duoshuo.loadComment(threadKey);
                    }
                });
            }
        };
    }]);
})(angular, window);