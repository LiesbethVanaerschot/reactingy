const config = require('../../config');
if (!config.tasks.production.rev) return;

const
    gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),

    // If you are familiar with Rails, this task the equivalent of `rake assets:precompile`
    revTask = (cb) => {
        gulpSequence(
            // 1) Add md5 hashes to assets referenced by CSS and JS files
            'rev-assets',
            // 2) Update asset references (images, fonts, etc) with reved filenames in compiled css + js
            'rev-update-references',
            // 3) Rev and compress CSS and JS files (this is done after assets, so that if a referenced asset hash changes, the parent hash will change as well
            'rev-css',
            cb
        );
    };

gulp.task('rev', revTask);
module.exports = revTask;
