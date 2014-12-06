module.exports = function(totalRecord, page, pageSize, list) {
    if(arguments.length == 1) {
        var p = arguments[0];
        if(!p) {
            p = 1;
        } else if(parseInt(p) <= 0) {
            p = 1;
        }
        this.page = p;
        this.pageSize = 6;
        this.sinceCount = 0;
        this.totalRecord = 0;
        this.totalPage = 0;
        this.result = null;
        if(this.page >= 1) {
            this.sinceCount = (this.page - 1) * this.pageSize;
        }
    } else if(arguments.length == 2) {
        this.page = arguments[0];
        this.pageSize = arguments[1];
        this.sinceCount = 0;
        this.totalRecord = 0;
        this.totalPage = 0;
        this.result = null;
         if(this.page >= 1) {
            this.sinceCount = (this.page - 1) * this.pageSize;
        }
    } else if (arguments.length == 4) {
        this.page = arguments[1];
        this.pageSize = arguments[2];
        this.sinceCount = 0;
        this.totalRecord = arguments[0];
        this.totalPage = 0;
        this.result = arguments[3];
        if(this.totalRecord > 0) {
            this.totalPage = parseInt((this.totalRecord - 1) / this.pageSize + 1);
        }

        var startPage = 0;
        var endPage = 0;
        if (this.page < 4) {
            startPage = 1;
        } else {
            startPage = parseInt(this.page - 3);
        }

        if (this.totalPage >= 8) {
            if ((parseInt(this.page) + 3) >= this.totalPage) {
                endPage = this.totalPage;
            } else {
                endPage = parseInt(this.page) + 3;
            }

        } else if (parseInt(this.totalPage) < 8) {
            endPage = this.totalPage;
        } else {
            endPage = this.page + parseInt(this.totalPage) - 1;
        }
        this.startPage = startPage;
        this.endPage = endPage;
    }

    this.setPageSize = function(pSize) {
        this.pageSize = pSize;
    }

    this.setPage = function(pPage) {
        this.page = pPage;
        if(this.page >= 1) {
            this.sinceCount = (this.page - 1) * this.pageSize;
        }
    }
    return this;
}