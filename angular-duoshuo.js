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

        var prepareComment = function(scope, url){
            var el = document.getElementById('ds-thread');
            var $el = angular.element(el);

            if(!scope.url){
                el.setAttribute('data-url', url);
            }
            DUOSHUO.EmbedThread(el);
        };

        this.setShortName = function(name){
            window.duoshuoQuery = {
                short_name: name
            };
        };

        this.$get = ['$location', function($location){
            var loadComment = function(scope) {
                if (!angular.isDefined(window.duoshuoQuery) || !angular.isDefined(window.duoshuoQuery.short_name)) {
                  throw new Error('No duoshuo shortname defined');
                } else if (!angular.isDefined(scope.threadKey)) {
                  throw new Error('No duoshuo thread key defined');
                } else if (angular.isDefined(window.DUOSHUO)) {
                  prepareComment(scope, $location.absUrl());
                } else {
                  loadScript('http://static.duoshuo.com/embed.js', function(){
                    prepareComment(scope, $location.absUrl());
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
            restrict: 'EA',
            replace: true,
            scope: {
                threadKey: '@',
                title: '@',
                image: '@',
                url: '@',
                authorKey: '@',
                formPosition: '@',
                limit: '@',
                order: '@'
            },
            template: '<div id="ds-thread" class="ds-thread"></div>',
            link: function(scope){
                scope.$watch('threadKey', function(threadKey) {
                    if (angular.isDefined(threadKey)) {
                        $duoshuo.loadComment(scope);
                    }
                });
            }
        };
    }]);
})(angular, window);