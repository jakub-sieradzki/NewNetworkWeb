<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            //This will be replaced by only user_id field in near future
            $table->string('user_name');
            $table->string('user_surname');
            $table->string('user_id');
            $table->string('profile_image_url');
            $table->longText('content');
            $table->string('categories');
            $table->integer('views');
            $table->integer('comments_count');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
