module.exports = function(page, pageSize) {
    this.page = page;
    this.pageSize = pageSize;
    this.sinceCount = 0;
    this.totalRecord = 0;
    this.totalPage = 0;
    this.result = null;
    if(page >= 1) {
        sinceCount = (page - 1) * pageSize;
    }
    this.setPageSize = function(pSize) {
        this.pageSize = pSize;
    }

    this.setPage = function(pPage) {
        this.page = pPage;
        if(page >= 1) {
            sinceCount = (page - 1) * pageSize;
        }
    }
    this.getPage = function() {
        return this.page;
    }
    this.getPageSize = function() {
        return this.pageSize;
    }
    this.getSinceCount = function() {
        return this.sinceCount;
    }
    return this;
}

module.exports = function(totalRecord, page, pageSize, list) {
    this.page = page;
    this.pageSize = pageSize;
    this.sinceCount = 0;
    this.totalRecord = totalRecord;
    this.totalPage = 0;
    this.result = list;
    if(totalRecord > 0) {
        totalPage = (totalRecord - 1) / page + 1;
    }

    this.setPageSize = function(pSize) {
        this.pageSize = pSize;
    }

    this.setPage = function(pPage) {
        this.page = pPage;
        if(page >= 1) {
            sinceCount = (page - 1) * pageSize;
        }
    }
    this.getPage = function() {
        return this.page;
    }
    this.getPageSize = function() {
        return this.pageSize;
    }
    this.getSinceCount = function() {
        return this.sinceCount;
    }
    return this;
}