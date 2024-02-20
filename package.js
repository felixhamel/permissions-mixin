Package.describe({
  name: 'didericis:permissions-mixin',
  version: '1.1.3',
  summary: 'mdg:validated-method mixin for declaratively defining method permissions based on roles',
  git: 'https://github.com/didericis/permissions-mixin.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'check']);
  api.use('alanning:roles@3.6.2');
  api.use('mdg:validated-method@1.3.0');
  api.addFiles('permissions-mixin.js');
  api.export('PermissionsMixin');
});

Package.onTest(function (api) {
    api.use([
      'ecmascript',
      'accounts-password',
      'alanning:roles@3.6.2',
      'practicalmeteor:mocha@2.1.0_5',
      'practicalmeteor:chai@2.1.0_1',
      'mdg:validated-method@1.3.0',
      'mongo',
      'didericis:permissions-mixin@1.1.3'
    ]);

    api.addFiles('permissions-mixin-tests.js');
});
