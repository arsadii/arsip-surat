<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->id();
            $table->string('goods_code');
            $table->string('goods_name');
            $table->string('contract_no');
            $table->date('contract_date');
            $table->string('bast_no');
            $table->date('bast_date');
            $table->string('sp2d_no');
            $table->date('sp2d_date');
            $table->string('skpd');
            $table->string('bank_name');
            $table->string('npwp');
            $table->string('spm_no');
            $table->string('company_name');
            $table->string('brand')->nullable();
            $table->string('size')->nullable();
            $table->string('ingredient');
            $table->string('buy_year');
            $table->string('model_no')->nullable();
            $table->unsignedDouble('price');
            $table->string('file_path');
            $table->string('user_name');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('files');
    }
}
