# BUG: I wonder why this seed takes so long to run...

def add
  i = Comment.count
  Comment.create(text: "comment_#{i}")
end

def bulk_insert(n)
  start = Time.now
  (1..n).each { add }
  finish = Time.now
  ap "seed.bulk_insert took #{finish - start} seconds"
end

bulk_insert(1000)